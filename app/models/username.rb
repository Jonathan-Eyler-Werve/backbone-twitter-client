class Username < ActiveRecord::Base

  def self.fetch_suggestions name

    CLIENT.user_search(name).each do |user_id|

      # Check if username is new to us,
        # if so fetch user details
        # persist user details
        # ( N+1 query! Mind your rate limits. )

      # Create username report (JSON) from persisted data + search userIDs

    end

  end

end
