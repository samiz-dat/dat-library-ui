
const statusMap = {
  standard: {
    success: 'green',
    warning: 'gold',
    danger: 'dark-red',
    primary: 'blue',
    normal: 'dark-gray',
  },
  washed: {
    success: 'light-green',
    warning: 'light-yellow',
    danger: 'washed-red',
    primary: 'lightest-blue',
    normal: 'moon-gray',
  },
};

const sizeMap = {
  'x-small': 'f6',
  small: 'f5',
  medium: 'f4',
  large: 'f3',
  'x-large': 'f2',
};

export function getStatusColour(status = '', type = 'standard') {
  const lower = status.toLowerCase();
  return statusMap[type || 'standard'][lower || 'normal'];
}

export function getSizeStyle(size = '') {
  const lower = size.toLowerCase();
  return sizeMap[lower || 'medium'];
}

export function getIconName(name) {
  return `fa-${name}`;
}
