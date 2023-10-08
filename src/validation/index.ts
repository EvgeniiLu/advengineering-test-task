import {_required, _minLength, _maxLength} from './messages'

export const loginRules = {
  username: {required: _required()},
  password: {required: _required(), minLength: _minLength(8)}
}

export const eventRules = {
  name: {required: _required()},
  address: {required: _required()},
  comment: {maxLength: _maxLength(100)}
}
