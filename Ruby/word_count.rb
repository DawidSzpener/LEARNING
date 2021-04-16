def word_count(sentence)

  words = sentence.split(" ")
  hash = {}

  words.each { |word| hash.include?(word) ? hash[word] += 1 : hash[word] = 1 }

  return hash
end

word_count("Once upon a time in a land far far away")