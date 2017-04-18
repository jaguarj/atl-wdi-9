require 'pry'

@shopping_list = ['banana', 'coffee', 'oranges']
puts @shopping_list.length
puts'----' * 5
puts @shopping_list


def add_to_shopping_list
	puts "Would you like to add to your shopping list, yes or no?"
	answer = gets.chomp
	if answer == "no"
		remove_item_from_list
	else
		puts "What would you like to add to your shopping list?"
		item = gets.chomp
		@shopping_list << item
	end
end

############ Remove from list script ####################
def remove_item_from_list
	puts "Would you like to remove an item from your list, yes or no?"
	answer = gets.chomp
	if answer == "yes"
		puts "What item would you like to remove?"
		item = gets.chomp
		@shopping_list.delete(item)
	end
end

@shopping_list.insert(1, 'Ice cream')

add_to_shopping_list

puts '-' * 10

remove_item_from_list

puts @shopping_list
puts '-' * 10

print @shopping_list

puts '---------'

############ Iterate over list itmes and output in reverse script ####################

@shopping_list.each do |shopping_list|
	puts "\n\nItems reversed: " + " -" + " " + shopping_list.reverse
end

puts '---------'
@shopping_list.each_with_index { |v, i| puts "(#{i + 1}) #{v}\n" }

puts '---------'

puts "Here is the length of the shopping list: "
puts '---------'

def length_of_shopping_list
	puts @shopping_list.length.to_i
end

length_of_shopping_list

puts '---------'

puts "This is the length of the first item in the array: "
puts @shopping_list[0].length.to_i


puts '---------'


def square
	puts "This is the length of the first item in the array squared: "
	b = @shopping_list[0].length**2
	puts '---------'
	puts b
end

square

puts '---------'

puts "Is the list even?"

def shopping_list_length_even_or_odd
	puts @shopping_list.length.even?
end

shopping_list_length_even_or_odd

puts '---------'

#////////////////////////////////////////////////

def starts_with_a
	puts "Does the second word start with the letter 'A'? "
	if @shopping_list[1].start_with? 'a'
		puts "True"
	elsif @shopping_list[1].start_with? 'A'
		puts "True"
	else
		puts "False"
	end
end

starts_with_a
