import { Flex, H2, H4, P, Span } from '@tpr/core';
import { FFInputNumber } from '@tpr/forms';
import React, { useContext, useEffect, useState } from 'react';
import { S179Context } from '../Services/S179Context';
import styles from './ProportionOfLiabilities.module.scss';

export const ProportionOfLiabilities: React.FC = () => {
  const s179Context = useContext(S179Context);

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
    s179Context.data.PensionerPost2009,
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
      Number(s179Context.data.PensionerPost2009);
    setPensionerTotal(pensionerTotal);
  }, [
    s179Context.data.DeferredPre1997,
    s179Context.data.DeferredPreApril2009,
    s179Context.data.DeferredPostApril2009,
    s179Context.data.ActivePre1997,
    s179Context.data.ActivePreApril2009,
    s179Context.data.ActivePostApril2009,
    s179Context.data.PensionersPre1997,
    s179Context.data.PensionerPost2009,
  ]);

  return (
    <Flex cfg={{ flexDirection: 'column' }}>
      <H2 cfg={{ mt: 5, mb: 2 }}>Proportion of Liabilities</H2>
      <P>
        Enter the percentage of liabilities for each member type. Total for each
        member must equal 100%
      </P>
      <Flex cfg={{ flexDirection: 'row' }}>
        <Flex cfg={{ flexDirection: 'column' }}>
          <Flex
            cfg={{
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <P className={styles.fieldTitles}>Pre 6 April 1997</P>
            <P className={styles.fieldTitles}>6 April 1997 - 5 April 2009</P>
            <P className={styles.fieldTitles}>Post 5 April 2009</P>
          </Flex>
          <Flex cfg={{ flexDirection: 'column', my: 1 }}>
            <Flex
              cfg={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <P className={styles.rowTitle}>Active Members</P>

              <FFInputNumber
                name="ActivePre1997"
                inputWidth={7}
                after="%"
                callback={(event: any) => {
                  setActivePre1997(Number(event.target.value));
                }}
              />
              <FFInputNumber
                type="number"
                name="ActivePreApril2009"
                after="%"
                inputWidth={7}
                callback={(event: any) => setActivePre2009(event.target.value)}
              />
              <FFInputNumber
                type="number"
                name="ActivePostApril2009"
                inputWidth={7}
                after="%"
                callback={(event: any) => setActivePost2009(event.target.value)}
              />
              <Flex cfg={{ flexDirection: 'column', my: 1 }}>
                <H4>Active Members Total</H4>
                <P>This total automatically updates as you type</P>
                <Span tag="h4">{activeTotal}%</Span>
              </Flex>
            </Flex>
            <Flex
              cfg={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <P className={styles.rowTitle}>Deferred Members</P>

              <FFInputNumber
                name="DeferredPre1997"
                inputWidth={7}
                after="%"
                callback={(event: any) =>
                  setDeferredPre1997(event.target.value)
                }
              />
              <FFInputNumber
                type="number"
                name="DeferredPreApril2009"
                after="%"
                inputWidth={7}
                callback={(event: any) =>
                  setDeferredPre2009(event.target.value)
                }
              />
              <FFInputNumber
                type="number"
                name="DeferredPostApril2009"
                inputWidth={7}
                after="%"
                callback={(event: any) =>
                  setDeferredPost2009(event.target.value)
                }
              />
              <Flex cfg={{ flexDirection: 'column', my: 1 }}>
                <H4>Deferred Members Total</H4>
                <P>This total automatically updates as you type</P>
                <Span tag="h4">{deferredTotal}%</Span>
              </Flex>
            </Flex>
            <Flex
              cfg={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                mt: 2,
              }}
            >
              <P className={styles.pensionerFieldTitles}>Pre 6 April 1997</P>
              <P className={styles.pensionerFieldTitles}>Post 5 April 2009</P>
            </Flex>
            <Flex
              cfg={{
                alignItems: 'center',
              }}
            >
              <P className={styles.rowTitle}>Pensioner Members</P>
              <Flex className={styles.pensionerFieldQuestion}>
                <FFInputNumber
                  name="PensionersPre1997"
                  inputWidth={7}
                  after="%"
                  callback={(event: any) =>
                    setPensionerPre1997(event.target.value)
                  }
                />
              </Flex>
              <Flex className={styles.pensionerFieldQuestion}>
                <FFInputNumber
                  type="number"
                  name="PensionerPost2009"
                  after="%"
                  inputWidth={7}
                  callback={(event: any) =>
                    setPensionerPost2009(event.target.value)
                  }
                />
              </Flex>
              <Flex cfg={{ flexDirection: 'column', my: 1 }}>
                <H4>Pensioner Members Total</H4>
                <P>This total automatically updates as you type</P>
                <Span tag="h4">{pensionerTotal}%</Span>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
