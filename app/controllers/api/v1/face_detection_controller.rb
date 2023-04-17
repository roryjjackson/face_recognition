module Api
  module V1
    class FaceDetectionController < ApplicationController
      require 'uri'
      require 'net/http'
      require 'openssl'

      def index
        url = URI("https://celebrity-face-detection.p.rapidapi.com/")

        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true
        http.verify_mode = OpenSSL::SSL::VERIFY_NONE

        request = Net::HTTP::Post.new(url)
        request["content-type"] = 'application/x-www-form-urlencoded'
        request["X-RapidAPI-Key"] = '1bcc9af75fmsh31aeea8c1c4f208p1aad28jsn317aa2ee3ec2'
        request["X-RapidAPI-Host"] = 'celebrity-face-detection.p.rapidapi.com'
        request.body = URI.encode_www_form({
          'image_url' => 'https://res.cloudinary.com/dfipoufmj/image/upload/v1681720143/ap23078750770682-17b30c0b0b6a544e862bcc523073c332b8e6f805_u3wvlg.jpg'
        })
        response = http.request(request)
        puts response.read_body
        response_body = response.body.to_s
        @persons = JSON.parse(response.body)
      end
    end
  end
end
