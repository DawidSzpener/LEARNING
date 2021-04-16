# x = [1, 2, 3, 4, 5]

# sum = 0

# x.each_with_index{ |num, i| sum += num * i}

# puts sum

arr = [-1, 2, 1, 2, 5, 7, 3]

arr.each_with_index{ |elem, i| i > elem ? (puts "Product: #{elem}, index: #{i}") : nil }