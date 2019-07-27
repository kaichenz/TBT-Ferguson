require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new(name: "Example User", email: "user@example.com",
                    password: "foobar", password_confirmation: "foobar")
  end

  test "should be valid" do
    assert @user.valid?
  end 

  test "name should be present (not blank)" do
    @user.name = "     "
    assert_not @user.valid?
  end 

  test "email should be present (not blank)" do
    @user.email = "     "
    assert_not @user.valid?
  end

  test "name should be less than 50 characters" do
    @user.name = "a" * 51
    assert_not @user.valid?
  end

  test "email should be less than 100 characters" do
    @user.email = "a" * 89 + "@example.com"
  end

  test "email validation" do 
    valid_addresses = %w[user@example.com USER@foo.COM A_US-ER@foo.bar.org first.last@foo.jp alice+bob@baz.cn]
    valid_addresses.each do |valid_address|
      @user.email = valid_address
      assert @user.valid?, "#{valid_address.inspect} should be valid"
    end 
  end 

  test "email address should be unique" do
    duplicate_user = @user.dup 
    @user.save 
    assert_not duplicate_user.valid?
  end 

  test "email addresses should be saved as lowercase" do
    mixed_case_email = "FOO@EXAMPLE.COM"
    @user.email = mixed_case_email
    @user.save
    assert_equal mixed_case_email.downcase, @user.reload.email
  end 
end
