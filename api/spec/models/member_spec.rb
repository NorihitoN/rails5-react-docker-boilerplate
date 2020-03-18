require 'rails_helper'

RSpec.describe Member, type: :model do
  describe "validates presence" do
    context "if member_name is not input" do
      let(:member) { build(:member, member_name: nil)}
      it "Error" do
        member.valid?
        expect(member.errors.messages[:member_name]).to include "can't be blank"
      end
    end

    context  "if family id is not input" do
      let(:member) { build(:member, family_id: nil) }
      it "Error" do
        expect(member).to be_invalid
      end
    end
    
    context "if member birthday is out of range" do
      let(:member) { build(:member, member_birthday: "2020-12-01")}
      it "Error" do
        expect(member).to be_invalid
      end
    end
  end
end
