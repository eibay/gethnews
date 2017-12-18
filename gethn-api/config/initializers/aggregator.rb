require 'HTTParty'
require 'rufus-scheduler'

def is_story_id_uniq?(id)
  Article.exists?(story_id: id) ? false : true
end

def collectDetails(article, title)
  if is_story_id_uniq?(article["_tags"][2])
    Article.create({
      title: title,
      author: article["author"],
      created_at: article["created_at"],
      story_id: article["_tags"][2]
      })
  end
end

def fetchData()
  puts "Fetching now..#{Time.now.strftime('%X')}!"
  titles = []
  url = "http://hn.algolia.com/api/v1/search_by_date?query=nodejs"
  response = HTTParty.get(url, :headers =>{'Content-Type' => 'application/json'})
  if response
    response["hits"].map do |story|
      ( story["title"] ? collectDetails(story, story["title"]) : collectDetails(story, story["story_title"]))
    end
    puts "Fetching completed.. #{Time.now.strftime('%X')}!"
  end
end

# Force to run initially to ensure there's data to display
fetchData

scheduler = Rufus::Scheduler.singleton
hourly_fetch = scheduler.every '1m' do
  fetchData
end