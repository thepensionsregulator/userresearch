import { Flex, H2, H3, H4, Hr, P, Span } from '@tpr/core';
import { FFInputNumber } from '@tpr/forms';
import { HelpLink } from '@tpr/layout';
import React, { useContext, useEffect, useState } from 'react';
import { S179Context } from '../Services/S179Context';
import styles from './ProportionOfLiabilities.module.scss';

export const ProportionOfLiabilities: React.FC = () => {
  const s179Context = useContext(S179Context);
  const data = s179Context.data;

  const [activeTotal, setActiveTotal] = useState(0);

  const [deferredTotal, setDeferredTotal] = useState<number>(0);

  const [pensionerTotal, setPensionerTotal] = useState<number>(0);

  const [ActivePre1997, setActivePre1997] = useState<number>(
    s179Context.data.ActivePre1997,
  );
  const [ActivePre2009, setActivePre2009] = useState<number>(
    s179Context.data.ActivePreApril2009,
  );
  const [ActivePost2009, setActivePost2009] = useState<number>(
    s179Context.data.ActivePostApril2009,
  );
  const [DeferredPre1997, setDeferredPre1997] = useState<number>(
    s179Context.data.DeferredPre1997,
  );
  const [DeferredPre2009, setDeferredPre2009] = useState<number>(
    s179Context.data.DeferredPreApril2009,
  );
  const [DeferredPost2009, setDeferredPost2009] = useState<number>(
    s179Context.data.DeferredPostApril2009,
  );
  const [PensionerPre1997, setPensionerPre1997] = useState<number>(
    s179Context.data.PensionersPre1997,
  );
  const [PensionerPost2009, setPensionerPost2009] = useState<number>(
    s179Context.data.PensionerPost1997,
  );

  useEffect(() => {
    const activeTotal =
      Number(ActivePre1997) + Number(ActivePre2009) + Number(ActivePost2009);
    setActiveTotal(activeTotal);
  }, [ActivePre1997, ActivePre2009, ActivePost2009]);

  useEffect(() => {
    const deferredTotal =
      Number(DeferredPre1997) +
      Number(DeferredPre2009) +
      Number(DeferredPost2009);
    setDeferredTotal(deferredTotal);
  }, [DeferredPre1997, DeferredPre2009, DeferredPost2009]);

  useEffect(() => {
    const pensionerTotal = Number(PensionerPre1997) + Number(PensionerPost2009);
    setPensionerTotal(pensionerTotal);
  }, [PensionerPre1997, PensionerPost2009]);

  useEffect(() => {
    const deferredTotal =
      Number(s179Context.data.DeferredPre1997) +
      Number(s179Context.data.DeferredPreApril2009) +
      Number(s179Context.data.DeferredPostApril2009);
    setDeferredTotal(deferredTotal);

    const activeTotal =
      Number(s179Context.data.ActivePre1997) +
      Number(s179Context.data.ActivePreApril2009) +
      Number(s179Context.data.ActivePostApril2009);
    setActiveTotal(activeTotal);

    const pensionerTotal =
      Number(s179Context.data.PensionersPre1997) +
      Number(s179Context.data.PensionerPost1997);
    setPensionerTotal(pensionerTotal);
  }, [
    s179Context.data.DeferredPre1997,
    s179Context.data.DeferredPreApril2009,
    s179Context.data.DeferredPostApril2009,
    s179Context.data.ActivePre1997,
    s179Context.data.ActivePreApril2009,
    s179Context.data.ActivePostApril2009,
    s179Context.data.PensionersPre1997,
    s179Context.data.PensionerPost1997,
  ]);

  return (
    <Flex cfg={{ flexDirection: 'column' }}>
      <H2 cfg={{ mt: 6, mb: 2 }}>Proportion of Liabilities</H2>
      <P>
        Enter the percentage of liabilities for each member type. Total for each
        member must equal 100%
      </P>
      <Flex cfg={{ flexDirection: 'column', mt: 5 }}>
        <Flex cfg={{ flexDirection: 'row', my: 1 }}>
          <Flex className={styles.columns}>
            <H3 className={styles.rowTitle}>Active Members</H3>
            <FFInputNumber
              name="ActivePre1997"
              label="Pre 6 April 1997"
              inputWidth={2}
              after="%"
              callback={(event: any) => {
                setActivePre1997(Number(event.target.value));
              }}
              required
              cfg={{ mt: 1, mb: 5 }}
              initialValue={data.ActivePre1997}
            />
            <FFInputNumber
              type="number"
              name="ActivePreApril2009"
              label="6 April 1997 to 5 April 2009"
              after="%"
              inputWidth={2}
              callback={(event: any) => setActivePre2009(event.target.value)}
              required
              cfg={{ mt: 1, mb: 5 }}
              initialValue={data.ActivePreApril2009}
            />
            <FFInputNumber
              type="number"
              name="ActivePostApril2009"
              label="Post 5 April 2009"
              inputWidth={2}
              after="%"
              callback={(event: any) => setActivePost2009(event.target.value)}
              required
              cfg={{ mt: 1, mb: 5 }}
              initialValue={data.ActivePostApril2009}
            />
            <Flex cfg={{ flexDirection: 'column', my: 1 }}>
              <Hr cfg={{ mt: 3, mb: 2 }} />
              <H4>Active Members Total</H4>
              <P>This total automatically updates as you type.</P>
              <Span tag="h4">{isNaN(activeTotal) ? 0 : activeTotal}%</Span>
            </Flex>
          </Flex>
          <Flex className={styles.columns}>
            <H3 className={styles.rowTitle}>Deferred Members</H3>

            <FFInputNumber
              name="DeferredPre1997"
              label="Pre 6 April 1997"
              inputWidth={2}
              after="%"
              callback={(event: any) => setDeferredPre1997(event.target.value)}
              required
              cfg={{ mt: 1, mb: 5 }}
              initialValue={data.DeferredPre1997}
            />
            <FFInputNumber
              type="number"
              name="DeferredPreApril2009"
              label="6 April 1997 to 5 April 2009 (inclusive)"
              after="%"
              inputWidth={2}
              callback={(event: any) => setDeferredPre2009(event.target.value)}
              required
              cfg={{ mt: 1, mb: 5 }}
              initialValue={data.DeferredPreApril2009}
            />
            <FFInputNumber
              type="number"
              name="DeferredPostApril2009"
              label="Post 5 April 2009"
              inputWidth={2}
              after="%"
              callback={(event: any) => setDeferredPost2009(event.target.value)}
              required
              cfg={{ mt: 1, mb: 5 }}
              initialValue={data.DeferredPostApril2009}
            />
            <Flex cfg={{ flexDirection: 'column', my: 1 }}>
              <Hr cfg={{ mt: 3, mb: 2 }} />
              <H4>Deferred Members Total</H4>
              <P>This total automatically updates as you type.</P>
              <Span tag="h4">{isNaN(deferredTotal) ? 0 : deferredTotal}%</Span>
            </Flex>
          </Flex>
          <Flex className={styles.columns}>
            <H3 className={styles.rowTitle}>Pensioner Members</H3>

            <FFInputNumber
              name="PensionersPre1997"
              label="Pre 6 April 1997"
              inputWidth={2}
              after="%"
              callback={(event: any) => setPensionerPre1997(event.target.value)}
              required
              cfg={{ mt: 1, mb: 5 }}
              initialValue={data.PensionersPre1997}
            />

            <FFInputNumber
              type="number"
              name="PensionerPost1997"
              label="Post 5 April 1997"
              after="%"
              inputWidth={2}
              callback={(event: any) =>
                setPensionerPost2009(event.target.value)
              }
              required
              cfg={{ mt: 1, mb: 5 }}
              initialValue={data.PensionerPost1997}
            />

            <Flex cfg={{ flex: '1 0 auto' }}></Flex>
            <Hr cfg={{ mt: 3, mb: 1 }} />
            <Flex cfg={{ flexDirection: 'column', my: 1 }}>
              <H4>Pensioner Members Total</H4>
              <P>This total automatically updates as you type.</P>
              <Span tag="h4">
                {isNaN(pensionerTotal) ? 0 : pensionerTotal}%
              </Span>
            </Flex>
          </Flex>
        </Flex>
        <HelpLink title="Help with proportion of liabilities">
          HelpLink content
        </HelpLink>
      </Flex>
    </Flex>
  );
};
