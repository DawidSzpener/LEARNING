def longest_word(sentence)
  words = sentence.split(" ")
  
  i = 0
  longest_word = ""
  
  while i < words.length do
      if longest_word.length > words[i].length
        nil
      else
        longest_word = words[i]
      end

      i += 1
  end
  
  puts longest_word
end

longest_word("Hello, I am dumb")