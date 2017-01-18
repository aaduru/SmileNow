# json.extract! tag, :id, :name

tags.each do |tag|
  json.set! tag.id do
    json.partial! '/api/tags/tag', tag: tag
  end
end
