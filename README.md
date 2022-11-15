# Lab 8 - Starter

Question 1 - Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why?
Answer 1 - Within a Github action that runs whenever code is pushed.
Explanation: Wait until the end of a project to test everything is the best way to not do it, so the third answer is tipically what we should avoid. And for the second one, run everything manually before pushing is a good idea but definitely a risk to make mistake or forget to test something. Definitely, the best way to do is to set Github action that which be excecuted each time, without external action. It's the easiest way to do and that's allow you to add new test.


Question 2 - Would you use an end to end test to check if a function is returning the correct output? 
Answer 2 - yes


