import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleDescription = {
    workTime: 'Trabalho',
    shortBreakTime: 'Pausa curta',
    longBreakTime: 'Pausa longa',
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos</span>

      <div className={styles.cyclesDots}>
        {cycleStep.map((_, index) => {
          const neXtCyle = getNextCycle(index);
          const nextCycleType = getNextCycleType(neXtCyle);

          return (
            <span
              key={index}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDescription[nextCycleType]}`}
              title={`${cycleDescription[nextCycleType]}`}
            />
          );
        })}
      </div>
    </div>
  );
}
