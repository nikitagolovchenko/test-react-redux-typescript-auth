import React from 'react';

interface ErrorAlertProps {
  alert: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ alert }) => {
  return (
    <div className="alert">{alert}</div>
  );
};

export default ErrorAlert;
