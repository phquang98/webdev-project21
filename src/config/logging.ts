const getTimeStamp = (): string => {
  return new Date().toISOString();
};

const showInfo = (namespace: string, msg: string, timeObj?: object) => {
  if (timeObj) {
    console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${msg}`, timeObj);
  } else {
    console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${msg}`);
  }
};

const showError = (namespace: string, msg: string, timeObj?: object) => {
  if (timeObj) {
    console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${msg}`, timeObj);
  } else {
    console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${msg}`);
  }
};

const showDebug = (namespace: string, msg: string, timeObj?: object) => {
  if (timeObj) {
    console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${msg}`, timeObj);
  } else {
    console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${msg}`);
  }
};

const showWarn = (namespace: string, msg: string, timeObj?: object) => {
  if (timeObj) {
    console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${msg}`, timeObj);
  } else {
    console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${msg}`);
  }
};

export default {
  info: showInfo,
  error: showError,
  debug: showDebug,
  warn: showWarn,
};
