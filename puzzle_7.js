save sequence as 0
recipe Move
| repeat if colour is not red and sequence is even
| down
| else
| repeat if colour is not red and sequence is odd
| up
repeat if sequence <4
| move
| right
| right
| sequence+1
move
down 
right
