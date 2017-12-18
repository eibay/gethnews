class ArticlesController < ApplicationController
  
  def index
    @articles = Article.all
    json_response(@articles)
  end
  
  def destroy
    article = Article.find(params[:id])
    article.destroy
  end
end
