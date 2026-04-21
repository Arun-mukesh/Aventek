import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Separator } from './ui/separator';
import { 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Download, 
  Mail,
  Zap,
  Shield,
  Wifi,
  Settings
} from 'lucide-react';

interface ConfigOption {
  id: string;
  label: string;
  description?: string;
  price?: number;
  icon?: React.ReactNode;
}

interface ConfigStep {
  id: string;
  title: string;
  description: string;
  options: ConfigOption[];
  type: 'single' | 'multiple';
}

const configuratorSteps: ConfigStep[] = [
  {
    id: 'product-type',
    title: 'Select Product Type',
    description: 'Choose the solution that best fits your needs',
    type: 'single',
    options: [
      {
        id: 'pump-controller',
        label: 'Pump Controller',
        description: 'Smart water management system',
        price: 0,
        icon: <Zap className="w-5 h-5" />
      },
      {
        id: 'security-system',
        label: 'Security System',
        description: 'Comprehensive surveillance solution',
        price: 0,
        icon: <Shield className="w-5 h-5" />
      },
      {
        id: 'iot-solution',
        label: 'IoT Solution',
        description: 'Connected device ecosystem',
        price: 0,
        icon: <Wifi className="w-5 h-5" />
      }
    ]
  },
  {
    id: 'capacity',
    title: 'Select Capacity',
    description: 'Choose the appropriate capacity for your application',
    type: 'single',
    options: [
      {
        id: 'small',
        label: 'Small (1-5 HP)',
        description: 'For residential & small commercial',
        price: 15000
      },
      {
        id: 'medium',
        label: 'Medium (5-15 HP)',
        description: 'For commercial applications',
        price: 35000
      },
      {
        id: 'large',
        label: 'Large (15+ HP)',
        description: 'For industrial applications',
        price: 65000
      }
    ]
  },
  {
    id: 'features',
    title: 'Additional Features',
    description: 'Enhance your system with these optional features',
    type: 'multiple',
    options: [
      {
        id: 'iot-connectivity',
        label: 'IoT Connectivity',
        description: 'Remote monitoring via mobile app',
        price: 8000
      },
      {
        id: 'ai-analytics',
        label: 'AI Analytics',
        description: 'Predictive maintenance & insights',
        price: 12000
      },
      {
        id: 'cloud-backup',
        label: 'Cloud Backup',
        description: 'Automatic data backup to cloud',
        price: 5000
      },
      {
        id: 'extended-warranty',
        label: 'Extended Warranty',
        description: '3-year comprehensive coverage',
        price: 10000
      }
    ]
  }
];

export function ProductConfigurator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string[]>>({});

  const step = configuratorSteps[currentStep];
  const isLastStep = currentStep === configuratorSteps.length - 1;
  const isFirstStep = currentStep === 0;

  const handleSelection = (stepId: string, optionId: string, type: 'single' | 'multiple') => {
    if (type === 'single') {
      setSelections(prev => ({ ...prev, [stepId]: [optionId] }));
    } else {
      setSelections(prev => {
        const current = prev[stepId] || [];
        if (current.includes(optionId)) {
          return { ...prev, [stepId]: current.filter(id => id !== optionId) };
        } else {
          return { ...prev, [stepId]: [...current, optionId] };
        }
      });
    }
  };

  const canProceed = () => {
    const currentSelections = selections[step.id] || [];
    return currentSelections.length > 0;
  };

  const calculateTotal = () => {
    let total = 0;
    configuratorSteps.forEach(step => {
      const selected = selections[step.id] || [];
      selected.forEach(optionId => {
        const option = step.options.find(o => o.id === optionId);
        if (option?.price) {
          total += option.price;
        }
      });
    });
    return total;
  };

  const getSelectedOptions = () => {
    const result: Array<{ step: string; option: ConfigOption }> = [];
    configuratorSteps.forEach(step => {
      const selected = selections[step.id] || [];
      selected.forEach(optionId => {
        const option = step.options.find(o => o.id === optionId);
        if (option) {
          result.push({ step: step.title, option });
        }
      });
    });
    return result;
  };

  const handleQuote = () => {
    const selectedOptions = getSelectedOptions();
    const total = calculateTotal();
    console.log('Quote requested:', { selections: selectedOptions, total });
    alert(`Quote requested! Total: ₹${total.toLocaleString('en-IN')}\n\nOur team will contact you shortly.`);
  };

  if (currentStep === configuratorSteps.length) {
    // Summary view
    const selectedOptions = getSelectedOptions();
    const total = calculateTotal();

    return (
      <Card className="p-6 max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            Configuration Complete
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Review your selections and get a quote
          </p>
        </div>

        <Separator className="my-6" />

        <div className="space-y-4 mb-6">
          <h3 className="font-semibold text-slate-900 dark:text-white">
            Your Configuration:
          </h3>
          {selectedOptions.map((item, index) => (
            <div key={index} className="flex justify-between items-start p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {item.step}
                </p>
                <p className="text-sm text-slate-900 dark:text-white">
                  {item.option.label}
                </p>
                {item.option.description && (
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.option.description}
                  </p>
                )}
              </div>
              {item.option.price !== undefined && item.option.price > 0 && (
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  ₹{item.option.price.toLocaleString('en-IN')}
                </p>
              )}
            </div>
          ))}
        </div>

        <Separator className="my-6" />

        <div className="flex justify-between items-center mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <span className="font-semibold text-slate-900 dark:text-white">
            Estimated Total:
          </span>
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            ₹{total.toLocaleString('en-IN')}
          </span>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setCurrentStep(0)}
          >
            <Settings className="w-4 h-4 mr-2" />
            Reconfigure
          </Button>
          <Button
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleQuote}
          >
            <Mail className="w-4 h-4 mr-2" />
            Request Quote
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 max-w-3xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {configuratorSteps.map((s, index) => (
            <div
              key={s.id}
              className={`flex-1 h-2 rounded-full ${
                index < currentStep
                  ? 'bg-green-500'
                  : index === currentStep
                  ? 'bg-blue-600'
                  : 'bg-slate-200 dark:bg-slate-700'
              } ${index > 0 ? 'ml-2' : ''}`}
              role="progressbar"
              aria-valuenow={currentStep + 1}
              aria-valuemin={1}
              aria-valuemax={configuratorSteps.length}
            />
          ))}
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Step {currentStep + 1} of {configuratorSteps.length}
        </p>
      </div>

      {/* Step Content */}
      <motion.div
        key={step.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
          {step.title}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          {step.description}
        </p>

        {step.type === 'single' ? (
          <RadioGroup
            value={selections[step.id]?.[0] || ''}
            onValueChange={(value) => handleSelection(step.id, value, 'single')}
            className="space-y-3"
          >
            {step.options.map((option) => (
              <div
                key={option.id}
                className={`flex items-start p-4 border-2 rounded-lg transition-all cursor-pointer hover:border-blue-300 dark:hover:border-blue-700 ${
                  selections[step.id]?.includes(option.id)
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-slate-200 dark:border-slate-700'
                }`}
              >
                <RadioGroupItem
                  value={option.id}
                  id={option.id}
                  className="mt-1"
                />
                <div className="flex-1 ml-3">
                  <Label htmlFor={option.id} className="cursor-pointer flex items-center gap-2">
                    {option.icon && <span className="text-blue-600 dark:text-blue-400">{option.icon}</span>}
                    <span className="font-medium text-slate-900 dark:text-white">
                      {option.label}
                    </span>
                    {option.price !== undefined && option.price > 0 && (
                      <Badge variant="secondary" className="ml-auto">
                        ₹{option.price.toLocaleString('en-IN')}
                      </Badge>
                    )}
                  </Label>
                  {option.description && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {option.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </RadioGroup>
        ) : (
          <div className="space-y-3">
            {step.options.map((option) => (
              <div
                key={option.id}
                className={`flex items-start p-4 border-2 rounded-lg transition-all cursor-pointer hover:border-blue-300 dark:hover:border-blue-700 ${
                  selections[step.id]?.includes(option.id)
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-slate-200 dark:border-slate-700'
                }`}
                onClick={() => handleSelection(step.id, option.id, 'multiple')}
              >
                <Checkbox
                  id={option.id}
                  checked={selections[step.id]?.includes(option.id) || false}
                  onCheckedChange={() => handleSelection(step.id, option.id, 'multiple')}
                  className="mt-1"
                />
                <div className="flex-1 ml-3">
                  <Label htmlFor={option.id} className="cursor-pointer flex items-center gap-2">
                    <span className="font-medium text-slate-900 dark:text-white">
                      {option.label}
                    </span>
                    {option.price !== undefined && option.price > 0 && (
                      <Badge variant="secondary" className="ml-auto">
                        +₹{option.price.toLocaleString('en-IN')}
                      </Badge>
                    )}
                  </Label>
                  {option.description && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {option.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(prev => prev - 1)}
          disabled={isFirstStep}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        <div className="text-sm text-slate-600 dark:text-slate-400">
          Estimated: <span className="font-semibold text-slate-900 dark:text-white">
            ₹{calculateTotal().toLocaleString('en-IN')}
          </span>
        </div>

        <Button
          onClick={() => setCurrentStep(prev => prev + 1)}
          disabled={!canProceed()}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          {isLastStep ? 'Review' : 'Next'}
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Card>
  );
}
