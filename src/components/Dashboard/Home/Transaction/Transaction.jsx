import React from 'react';
import css from './Transaction.module.css';

export const Transaction = ({ date, type, category, comment, sum }) => {
  const sumColor = type === '+' ? css.greenSum : css.redSum;
  return (
    <li className={css.transactionBox}>
      <div className={css.dateBox}>
            {date}
      </div>
      <div className={css.typeBox}>
            {type}
      </div>
      <div className={css.categoryBox}>
            {category}
      </div>
      <div className={css.commentBox}>
        {comment}
      </div>
      <div className={`${css.sumBox} ${sumColor}`}>
            {sum}
      </div>
      <div className={css.editDeleteBox}>
        <button className={css.deleteButton} type="button">
          Delete
        </button>
      </div>
    </li>
  );
};
