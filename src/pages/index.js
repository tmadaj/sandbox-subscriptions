import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import PlansList from '../components/PlansList/';

async function requestPlans(currency = 'EUR', cycle = 1) {
  const headers = new Headers({
    'Content-Type': 'application/json;charset=utf-8',
    'x-pm-appversion': 'Other',
    'x-pm-apiversion': '3',
    Accept: 'application/vnd.protonmail.v1+json',
  });
  const init = {
    method: 'GET',
    headers,
    mode: 'cors',
    cache: 'default',
  };
  const response = await fetch(
    `https://api.protonmail.ch/payments/plans?Currency=${currency}&Cycle=${cycle}`,
    init,
  );
  const result = await response.json();

  return result.Plans;
}

const ConfigContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  > select {
    margin-left: 0.5rem;
  }
`;

const PlansContainer = styled.div`
  margin: 1rem 0;
`;

export default function IndexPage() {
  const [currency, setCurrency] = useState('EUR');
  const [cycle, setCycle] = useState(1);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    requestPlans(currency, cycle).then(setPlans);
  }, [currency, cycle]);

  function handleCurrencyChange({ target: { value } }) {
    setCurrency(value);
  }

  function handleBillingCycleChange({ target: { value } }) {
    setCycle(Number(value));
  }

  return (
    <Layout>
      <h2>Plans & prices</h2>
      <ConfigContainer>
        <select
          value={cycle}
          onChange={handleBillingCycleChange}
          onBlur={() => {}}
        >
          <option value={1}>Monthly</option>
          <option value={12}>Annualy</option>
          <option value={24}>2 Years</option>
        </select>
        <select
          value={currency}
          onChange={handleCurrencyChange}
          onBlur={() => {}}
        >
          <option value="EUR">€ Euro</option>
          <option value="CHF">CHF</option>
          <option value="USD">$ USD</option>
        </select>
      </ConfigContainer>
      <PlansContainer>
        <PlansList plans={plans} />
      </PlansContainer>
    </Layout>
  );
}
