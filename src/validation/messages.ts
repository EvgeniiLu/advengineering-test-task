import {
  required,
  minLength,
  maxLength,
  helpers
} from "@vuelidate/validators";

export function _required() {
  return helpers.withMessage('Обзательное поле', required)
}

export function _minLength(params) {
  return helpers.withMessage(({$params}) => `Не меньше ${$params.min} символов`, minLength(params))
}

export function _maxLength(params) {
  return helpers.withMessage(({$params}) => `Не более ${$params.max} символов`, maxLength(params))
}
