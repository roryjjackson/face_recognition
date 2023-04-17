module Api
  module V1
    class MovieQuotesController < ApplicationController
      require 'uri'
      require 'net/http'
      require 'openssl'

      def index
        url = URI("https://movie-and-tv-shows-quotes.p.rapidapi.com/quotes")

        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true
        http.verify_mode = OpenSSL::SSL::VERIFY_NONE

        request = Net::HTTP::Get.new(url)
        request["X-RapidAPI-Key"] = '1bcc9af75fmsh31aeea8c1c4f208p1aad28jsn317aa2ee3ec2'
        request["X-RapidAPI-Host"] = 'movie-and-tv-shows-quotes.p.rapidapi.com'

        response = http.request(request)
        @quotes = JSON.parse(response.body)
        # render json: @quotes
        puts response.read_body
      end
    end
  end
end
