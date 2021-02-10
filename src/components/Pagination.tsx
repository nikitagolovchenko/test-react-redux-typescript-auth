import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { newsRequest } from './../store/actions/newsActions';

type PaginationState = {
  active: number;
};

const Pagination: React.FC = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    active: 1,
  });
  const ref = useRef<HTMLUListElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const btns = Array.from(ref.current!.children);

    btns.forEach((el: any) => {
      el.children[0].classList.remove('active');

      if (el.children[0].dataset.id == pagination.active) {
        el.children[0].classList.add('active');
      }
    });
  }, [pagination]);

  const btnClickhandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currNumber = Number(e.currentTarget.dataset.id);

    if (currNumber !== pagination.active) {
      setPagination({
        active: currNumber,
      });

      dispatch(newsRequest(pagination.active));
    }
  };

  return (
    <ul className='pagination' ref={ref}>
      <li>
        <button data-id='1' onClick={btnClickhandler}>
          1
        </button>
      </li>
      <li>
        <button data-id='2' onClick={btnClickhandler}>
          2
        </button>
      </li>
      <li>
        <button data-id='3' onClick={btnClickhandler}>
          3
        </button>
      </li>
      <li>
        <button data-id='4' onClick={btnClickhandler}>
          4
        </button>
      </li>
      <li>
        <button data-id='5' onClick={btnClickhandler}>
          5
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
