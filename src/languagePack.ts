import * as defaultLang from '../language/default.json';
import * as zhCNLang from '../language/zh-CN.json';
import * as esESLang from '../language/es-ES.json';
import requireJson from './utils/requireJson';

// 语言包，key值小写
const languagePack: { [key: string]: object } = {
  default: requireJson(defaultLang),
  'zh-cn': requireJson(zhCNLang),
  'zh-hans-cn': requireJson(zhCNLang),
  'es-es': requireJson(esESLang)
};

export default languagePack;
