import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import './reviewsStyles.css';

const reviewsData = [
  {
    nameKey: 'review_1_name',
    feedbackKey: 'review_1_feedback'
  },
  {
    nameKey: 'review_2_name',
    feedbackKey: 'review_2_feedback'
  },
  {
    nameKey: 'review_3_name',
    feedbackKey: 'review_3_feedback'
  }
];

const Reviews = () => {
  const { t } = useTranslation();

  return (
    <div className="reviews_unique_wrapper">
      <h2 className="reviews_unique_heading">{t('patient_reviews')}</h2>
      <div className="reviews_unique_list">
        {reviewsData.map((review, idx) => (
          <div key={idx} className="reviews_unique_card">
            <div className="reviews_unique_quote">“</div>
            <p className="reviews_unique_text">{t(review.feedbackKey)}</p>
            <p className="reviews_unique_name">- {t(review.nameKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
