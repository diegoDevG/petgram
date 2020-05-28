import { keyframes } from 'styled-components';

export const fade = keyframes`
from {
  opacity: 0;
  filter: blur(5px)    
}

to{
  opacity: 1;
  filter: blur(0)    
}
`
