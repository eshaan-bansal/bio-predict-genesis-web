
import React, { useState } from 'react';
import { Calculator, DollarSign } from 'lucide-react';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    batchesPerYear: 50,
    costPerBatch: 1200000,
    currentFailureRate: 15,
    currentYield: 70
  });

  const calculateSavings = () => {
    const { batchesPerYear, costPerBatch, currentFailureRate, currentYield } = inputs;
    
    // Current costs
    const currentFailureCost = (batchesPerYear * costPerBatch * currentFailureRate) / 100;
    const currentYieldLoss = (batchesPerYear * costPerBatch * (100 - currentYield)) / 100;
    
    // With RMPredictive (assuming 5% failure rate, 95% yield)
    const newFailureRate = 5;
    const newYield = 95;
    const newFailureCost = (batchesPerYear * costPerBatch * newFailureRate) / 100;
    const newYieldLoss = (batchesPerYear * costPerBatch * (100 - newYield)) / 100;
    
    const totalCurrentCost = currentFailureCost + currentYieldLoss;
    const totalNewCost = newFailureCost + newYieldLoss;
    const annualSavings = totalCurrentCost - totalNewCost;
    
    return {
      annualSavings,
      roi: annualSavings > 0 ? (annualSavings / 500000) * 100 : 0, // Assuming 500k implementation cost
      paybackMonths: annualSavings > 0 ? (500000 / annualSavings) * 12 : 0
    };
  };

  const results = calculateSavings();

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Calculator className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="font-serif text-2xl font-medium text-gray-900 mb-2">
          ROI Calculator
        </h3>
        <p className="text-gray-600">
          Calculate your potential savings with RMPredictive
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h4 className="font-medium text-gray-900 mb-4">Your Current Operations</h4>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Batches per Year
            </label>
            <input
              type="number"
              value={inputs.batchesPerYear}
              onChange={(e) => setInputs(prev => ({ ...prev, batchesPerYear: parseInt(e.target.value) || 0 }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cost per Batch ($)
            </label>
            <input
              type="number"
              value={inputs.costPerBatch}
              onChange={(e) => setInputs(prev => ({ ...prev, costPerBatch: parseInt(e.target.value) || 0 }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Failure Rate (%)
            </label>
            <input
              type="number"
              value={inputs.currentFailureRate}
              onChange={(e) => setInputs(prev => ({ ...prev, currentFailureRate: parseInt(e.target.value) || 0 }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Yield (%)
            </label>
            <input
              type="number"
              value={inputs.currentYield}
              onChange={(e) => setInputs(prev => ({ ...prev, currentYield: parseInt(e.target.value) || 0 }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="font-medium text-gray-900 mb-6">Projected Savings with RMPredictive</h4>
          
          <div className="space-y-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">
                ${results.annualSavings.toLocaleString()}
              </div>
              <div className="text-sm text-green-700">Annual Savings</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-xl font-bold text-blue-600">
                  {results.roi.toFixed(0)}%
                </div>
                <div className="text-xs text-blue-700">ROI</div>
              </div>

              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-xl font-bold text-purple-600">
                  {results.paybackMonths.toFixed(1)}
                </div>
                <div className="text-xs text-purple-700">Payback (months)</div>
              </div>
            </div>

            <div className="text-xs text-gray-500 mt-4">
              * Calculations based on reducing failure rate to 5% and increasing yield to 95%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
