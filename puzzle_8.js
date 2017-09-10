recipe move
| save 0 as step 
| repeat If step < number of steps
| go orientation
| step +1
sequence =0
repeat if sequence <4	
| if sequence is even 
  | repeat move, orientation down, number of steps =8
  | right
  | right
|else, if sequence is odd,
  | repeat move, orientation up, number of steps =7
  | right 
  | right
down
down
down
down
down
down
down
right
