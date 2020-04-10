

fact = \n ->
  if n==0 then 1
  else n*fact(n-1);

fact 5;


add = \a -> \b -> a+b;

(add 6) 7;
