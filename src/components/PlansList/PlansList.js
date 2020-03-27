import React from 'react';
import styled from 'styled-components';
import Plan from './Plan';
import {
  currencySymbol,
  formatCycle,
  monthlyPrice,
  cyclePrice,
} from './PlanUtils';
import { freePlan } from './PlanConstants';

const PlansWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 1rem;
  overflow-x: auto;
`;

const ExtrasWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

function renderExtra({ Name, Title, Pricing, Currency, Cycle }) {
  return (
    <div key={Name}>
      {Title}
      {': '}
      <span>
        {currencySymbol(Currency)} {monthlyPrice(Pricing, Cycle)} / month
        {Cycle !== 1 &&
          ` or ${currencySymbol(Currency)}
        ${cyclePrice(Pricing, Cycle)} / ${formatCycle(Cycle)}`}
      </span>
    </div>
  );
}

function renderExtras(extras) {
  return extras.map(extra => renderExtra(extra));
}

function renderPlans(plans) {
  return plans.map(plan => <Plan key={plan.Name} {...plan} />);
}

export default function PlansList({ plans }) {
  return (
    <>
      <PlansWrap>
        {renderPlans([
          freePlan,
          ...plans.filter(({ Name }) =>
            ['plus', 'professional', 'visionary'].includes(Name),
          ),
        ])}
      </PlansWrap>
      <ExtrasWrap>{renderExtras(plans.filter(({ Type }) => !Type))}</ExtrasWrap>
    </>
  );
}
