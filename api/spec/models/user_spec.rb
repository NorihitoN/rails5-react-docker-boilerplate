require 'rails_helper'

RSpec.describe User, type: :model do
  describe "validates presence" do
    context "if email address is not input" do
      let(:user) { build(:user, email: nil) }

      it "sign up error" do
        user.valid?
        expect(user.errors.messages[:email]).to include "can't be blank"
      end
    end
    
    context "if password address is not input" do
      let(:user) { build(:user, password: nil) }

      it "sign up error" do
        user.valid?
        expect(user.errors.messages[:password]).to include "can't be blank"
      end
    end
  end

  describe "validates uniqueness" do
    context "if the same email is registered" do
      let(:user1) { create(:user) }
      let(:user2) { build(:user, email: user1.email) }

      it "sign up error" do
        user2.valid?
        expect(user2.errors.messages[:email]).to include "has already been taken"
      end
    end
  end
end
