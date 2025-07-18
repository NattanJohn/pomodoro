import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { useEffect, useRef } from 'react';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/TaskActions';

export function Settings() {
  useEffect(() => {
    document.title = 'Configurações - Pomodoro';
  }, []);

  const { state, dispatch } = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakInputRef = useRef<HTMLInputElement>(null);
  const longBreakInputRef = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakInputRef.current?.value);
    const longBreakTime = Number(longBreakInputRef.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      showMessage.error('Digite apenas numeros nos campos');
      return;
    }

    if (workTime < 1 || workTime > 99) {
      showMessage.error('O tempo de foco deve estar entre 1 e 99');
      return;
    }

    if (shortBreakTime < 1 || shortBreakTime > 20) {
      showMessage.error('O tempo de descanso curto deve estar entre 1 e 20');
      return;
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      showMessage.error('O tempo de descanso longo deve estar entre 1 e 60');
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });

    showMessage.success('Configurações salvas com sucesso');
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p className={styles.descCenter}>
          Modifique as Configurações de tempo para foco, descanso durto e
          descanso longo{' '}
        </p>
      </Container>
      <Container>
        <form onSubmit={handleSaveSettings} action='' className={styles.form}>
          <div className={styles.formRow}>
            <DefaultInput
              id='workTime'
              inputTitle='Tempo de Foco (min)'
              placeholder='Tempo de Foco (min)'
              ref={workTimeInputRef}
              defaultValue={state.config.workTime}
              type='number'
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id='shortBreakTime'
              inputTitle='Tempo de descanso curto (min)'
              placeholder='Tempo de descanso curto (min)'
              ref={shortBreakInputRef}
              defaultValue={state.config.shortBreakTime}
              type='number'
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id='longBreakTime'
              inputTitle='Tempo de descanso longo (min)'
              placeholder='Tempo de descanso longo (min)'
              ref={longBreakInputRef}
              defaultValue={state.config.longBreakTime}
              type='number'
            />
          </div>
          <div className={styles.formRow}>
            <DefaultButton
              icon={<SaveIcon />}
              type='submit'
              aria-label='Salvar'
              title='Salvar'
            >
              Salvar
            </DefaultButton>
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
