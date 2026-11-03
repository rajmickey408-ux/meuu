/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ScreenStep, ActiveTab, UserProfile, AppViewMode } from './types';
import { Header } from './components/Header';
import { MobileFrame } from './components/MobileFrame';
import { FirstScreen } from './components/FirstScreen';
import { SecondScreen } from './components/SecondScreen';
import { ThirdScreen } from './components/ThirdScreen';
import { Dashboard } from './components/Dashboard';
import { BentoShowcase } from './components/BentoShowcase';

export default function App() {
  const [viewMode, setViewMode] = useState<AppViewMode>('bento-showcase');
  const [step, setStep] = useState<ScreenStep>('dashboard');
  
  // Default user matching the image: Harsh Raj, Class 10
  const [user, setUser] = useState<UserProfile | null>({
    name: 'Harsh Raj',
    email: 'harshraj@gmail.com',
    currentClass: 'Class 10',
    preferredStream: 'Science (PCM)',
    journeyProgress: 65,
    completedSteps: 5,
    totalSteps: 8
  });

  const [activeTab, setActiveTab] = useState<ActiveTab>('home');

  const handleSelectScreenFromBento = (selectedTab: ActiveTab) => {
    setActiveTab(selectedTab);
    setViewMode('interactive');
    setStep('dashboard');
  };

  const handleToggleShowcase = () => {
    if (viewMode === 'bento-showcase') {
      setViewMode('interactive');
    } else {
      setViewMode('bento-showcase');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setStep(1);
    setViewMode('interactive');
  };

  return (
    <div className="min-h-screen bg-[#040814] text-white">
      {viewMode === 'bento-showcase' ? (
        <BentoShowcase
          user={user}
          onSelectScreen={handleSelectScreenFromBento}
        />
      ) : (
        <MobileFrame>
          <Header 
            currentStep={step} 
            setStep={setStep} 
            user={user} 
            onLogout={handleLogout} 
            onToggleShowcase={handleToggleShowcase}
            isShowcaseActive={viewMode === 'bento-showcase'}
          />

          <main className="flex-1 w-full flex flex-col items-center">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <FirstScreen 
                  key="step-1"
                  onNext={() => setStep(2)} 
                  onQuickInteract={(promptText) => {
                    setActiveTab('chat');
                    setStep('dashboard');
                  }}
                />
              )}

              {step === 2 && (
                <SecondScreen 
                  key="step-2"
                  onNext={() => setStep(3)} 
                  onBack={() => setStep(1)}
                  onSelectFeature={(pillar) => {
                    setActiveTab(pillar.id as ActiveTab);
                    setStep('dashboard');
                  }}
                />
              )}

              {step === 3 && (
                <ThirdScreen 
                  key="step-3"
                  onLogin={(profile) => {
                    setUser(profile);
                    setStep('dashboard');
                  }}
                  onBack={() => setStep(2)}
                />
              )}

              {step === 'dashboard' && (
                <Dashboard 
                  key="step-dashboard"
                  user={user}
                  initialTab={activeTab}
                  onSwitchToBento={() => setViewMode('bento-showcase')}
                />
              )}
            </AnimatePresence>
          </main>
        </MobileFrame>
      )}
    </div>
  );
}
