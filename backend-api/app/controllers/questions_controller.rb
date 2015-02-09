class QuestionsController < ApplicationController
  after_filter :cors_set_access_control_headers

  # before_action :get_question, except: [:index, :create, :upvote, :downvote]
  #
  def show
    # http://localhost:3000/questions/1
    @question = Question.find(params[:id])
    render json: @question
  end

  def show_all_questions
    # http://localhost:3000/
    @api_response = HTTParty.get("https://api.github.com/zen",
            :headers => { "Authorization" => 'token ' + ENV['GITHUB_TOKEN'], 'User-Agent' => 'xyz'})
    @questions = Question.all.order(:created_at)
    # QUESTION??
    render json: {question: @questions, api_response: @api_response}
  end

  def create
    # questions?title=somesnakes&content=something
    @question = Question.new(title: params[:title], content: params[:content])#question_params)
    @question.save
    render json: @question
  end

  def upvote
    # http://localhost:3000/questions/1/upvotes
    @question = Question.find(params[:question_id])
    @question.increment!(:votes)
    render json: @question
  end

  def downvote
    # http://localhost:3000/questions/1/downvotes
    @question = Question.find(params[:question_id])
    @question.decrement!(:votes)
    render json: @question
  end

  private

  def cors_set_access_control_headers
    headers['Access-Control-Allow-Origin'] = 'http://localhost:4000'
    headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
  end


  # QUESTION??: IS THERE STILL A WAY TO USE THIS?
  def question_params
    params.require(:question).permit(:title, :content, :id, :votes)
  end
end
