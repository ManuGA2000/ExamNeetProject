import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Time = ({ initialMinutes = 1, initialSeconds = 0 }) => {
  const [time, setTime] = useState({
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  const [warning, setWarning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const { minutes, seconds } = time;

      if (seconds > 0) {
        setTime({ minutes, seconds: seconds - 1 });
      } else {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setTime({ minutes: minutes - 1, seconds: 59 });
        }
      }

      if (minutes === 0 && seconds === 55) {
        setWarning(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const handleClose = () => {
    setWarning(false);
  };

  return (
    <div>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
        {`${time.minutes.toString().padStart(2, '0')} : ${time.seconds.toString().padStart(2, '0')}`}
      </div>
      <Snackbar
        open={warning}
        autoHideDuration={1000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          You have only 15 minutes left!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Time;
