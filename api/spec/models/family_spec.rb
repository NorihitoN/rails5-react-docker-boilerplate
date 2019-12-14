require 'rails_helper'

RSpec.describe Family, type: :model do
  describe "validates presence" do
    context "if familyname is not input" do
      let(:family) { build(:family, familyname: nil)}
      it "Error" do
        family.valid?
        expect(family.errors.messages[:familyname]).to include "can't be blank"
      end
    end

    context  "if user id is not input" do
      let(:family) { build(:family, user_id: nil) }
      it "Error" do
        expect(family).to be_invalid
      end
    end
  end
end
