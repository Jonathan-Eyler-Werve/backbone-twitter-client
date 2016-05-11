class Username < ActiveRecord::Base

  def self.fetch_suggestions name

    CLIENT.user_search("@eyler").each do |user_id|

      # If username is new to us, fetch user details
      # ( N+1 query! Mind your rate limits. )

    end

  end


end
