import React from 'react';
import styled from 'styled-components';
import {
  currencySymbol,
  formatStorage,
  formatCycleBilling,
  monthlyPrice,
  plural,
  perUser,
  formatUsers,
  formatDomains,
  formatVPN,
} from './PlanUtils.js';
import { descriptions, features, support } from './PlanConstants.js';

const PlanWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  box-sizing: border-box;
  min-width: 15rem;
  padding: 2.25rem 1.5rem 2.75rem;
  margin-right: 0.1rem;
  border: 1px solid #ddd;

  ul {
    margin-bottom: 2.5rem;
  }
`;

const Popular = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0;
  width: 100%;
  color: #7bb256;
  font-size: 0.8rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

const TitleWrap = styled.h4`
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const PriceWrap = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const MonthlyPrice = styled.span`
  font-size: 1.75rem;
`;

const MetaPrice = styled.span`
  font-size: 0.85rem;
`;

const Billing = styled.div`
  height: 1.5rem;
  font-size: 0.85rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1.75rem;
`;

const ArrowLi = styled.li`
  list-style: '🡢';
  padding-left: 0.75rem;
  margin-left: 0.75rem;
  font-size: 0.9rem;
`;

const PrimaryButton = styled.button`
  margin: auto auto 0;
  padding: 0.6rem 1.75rem;
  border-radius: 0.25rem;
  border: none;
  background: #6880dd;
  color: #fff;
  cursor: pointer;
`;

function renderDetails({
  Name,
  MaxMembers,
  MaxSpace,
  MaxAddresses,
  MaxDomains,
  MaxVPN,
}) {
  return (
    <ul>
      <ArrowLi>{formatUsers(MaxMembers, Name)}</ArrowLi>
      <ArrowLi>
        {formatStorage(MaxSpace)} storage{perUser(Name)}
      </ArrowLi>
      <ArrowLi>
        {MaxAddresses} address{plural(MaxAddresses)}
        {perUser(Name)}
      </ArrowLi>
      <ArrowLi>{formatDomains(MaxDomains)}</ArrowLi>
      {features[Name] && <ArrowLi>{features[Name]}</ArrowLi>}
      {support[Name] && <ArrowLi>{support[Name]}</ArrowLi>}
      <ArrowLi> {formatVPN(MaxVPN)} </ArrowLi>
    </ul>
  );
}

export default React.memo(function Plan({
  Name,
  Title,
  Pricing,
  Currency,
  Cycle,
  ...details
}) {
  return (
    <PlanWrap>
      {Name === 'plus' && <Popular>Most popular</Popular>}
      <TitleWrap>{Title.replace('ProtonMail ', '')}</TitleWrap>
      <div>
        <PriceWrap>
          <MetaPrice>{currencySymbol(Currency)} </MetaPrice>
          <MonthlyPrice>{monthlyPrice(Pricing, Cycle)}</MonthlyPrice>
          <MetaPrice>/mo</MetaPrice>
        </PriceWrap>
        <Billing>{formatCycleBilling(Pricing, Cycle, Currency)}</Billing>
        <Description>{descriptions[Name]}</Description>
        {renderDetails({ Name, ...details })}
      </div>
      <PrimaryButton>Select</PrimaryButton>
    </PlanWrap>
  );
});
