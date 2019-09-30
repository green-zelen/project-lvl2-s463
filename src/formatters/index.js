import renderDiff from './renderDiff';
import renderPlain from './renderPlain';
import renderJson from './renderJson';

const getRender = (format) => {
  switch (format) {
    case 'diff':
      return renderDiff;
    case 'plain':
      return renderPlain;
    case 'json':
      return renderJson;
    default:
      return renderDiff;
  }
};

export default getRender;
