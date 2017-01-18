# json.extract! tag, :id, :name

@tags.each do |tag|
  json.set! tag.id do
    json.partial! '/api/tag/tag', tag: tag
  end
end
