import React, { useState, useMemo, useCallback } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = option => {
    setFeedback(prev => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  const calculateStats = useCallback(() => {
    const total = feedback.good + feedback.neutral + feedback.bad;
    const positivePercentage = total > 0 ? (feedback.good / total) * 100 : 0;

    return {
      good: feedback.good,
      neutral: feedback.neutral,
      bad: feedback.bad,
      total: total,
      positivePercentage: Math.round(positivePercentage),
    };
  }, [feedback]);

  const stats = useMemo(() => calculateStats(), [calculateStats]);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      {stats.total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={stats.good}
            neutral={stats.neutral}
            bad={stats.bad}
            total={stats.total}
            positivePercentage={stats.positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

export default App;