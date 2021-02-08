puts "Please enter a number from 0 to 50"

num = gets.chomp.to_i

list = (1..num).to_a

list.map{ |n|
  if (n % 3 == 0 && n % 5 == 0)
    puts n.to_s + " Fizzbuzz"
  elsif n % 3 == 0
    puts n.to_s + " Fizz"
  elsif n % 5 == 0
    puts n.to_s + " Buzz"
  end
}
