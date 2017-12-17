class ArticlesController < ApplicationController
  def index
    @articles = Article.all
    json_response(@articles)
  end
end
