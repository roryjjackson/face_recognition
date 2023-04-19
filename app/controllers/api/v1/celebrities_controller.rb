module Api
  module V1
    class CelebritiesController < ApplicationController
      before_action :set_celebrity, only: %i[ show edit update destroy ]
      require 'uri'
      require 'net/http'
      require 'openssl'

      # GET /celebrities or /celebrities.json
      def index
        @celebrities = Celebrity.all

        # url = URI("https://celebrity-face-detection.p.rapidapi.com/")
        # http = Net::HTTP.new(url.host, url.port)
        # http.use_ssl = true
        # http.verify_mode = OpenSSL::SSL::VERIFY_NONE

        # request = Net::HTTP::Post.new(url)
        # request["content-type"] = 'application/x-www-form-urlencoded'
        # request["X-RapidAPI-Key"] = '1bcc9af75fmsh31aeea8c1c4f208p1aad28jsn317aa2ee3ec2'
        # request["X-RapidAPI-Host"] = 'celebrity-face-detection.p.rapidapi.com'
        # request.body = URI.encode_www_form({
        #   'image_url' => 'https://res.cloudinary.com/dfipoufmj/image/upload/v1681720143/ap23078750770682-17b30c0b0b6a544e862bcc523073c332b8e6f805_u3wvlg.jpg'
        # })
        # response = http.request(request)
        # puts response.read_body
        # response_body = response.body.to_s
        # @celebrities = JSON.parse(response.body)

        respond_to do |format|
          format.html
          format.json { render json: @celebrities }
        end
      end

      def show
      end

      def new
        @celebrity = Celebrity.new
      end

      def edit
      end

      def create
        @celebrity = Celebrity.new(celebrity_params)

        if @celebrity.save
          render json: @celebrity, status: :created
        else
          render json: { errors: @celebrity.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        respond_to do |format|
          if @celebrity.update(celebrity_params)
            format.html { redirect_to celebrity_url(@celebrity), notice: "Celebrity was successfully updated." }
            format.json { render :show, status: :ok, location: @celebrity }
          else
            format.html { render :edit, status: :unprocessable_entity }
            format.json { render json: @celebrity.errors, status: :unprocessable_entity }
          end
        end
      end

      def destroy
        @celebrity.destroy

        respond_to do |format|
          format.html { redirect_to celebrities_url, notice: "Celebrity was successfully destroyed." }
          format.json { head :no_content }
        end
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_celebrity
          @celebrity = Celebrity.find(params[:id])
        end

        # Only allow a list of trusted parameters through.
        def celebrity_params
          params.require(:celebrity).permit(:name, :value, :app_id)
        end
    end
  end
end
