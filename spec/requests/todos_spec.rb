require 'spec_helper'

describe "Todos" do
  describe "GET /" do
    it "should be successful" do
      get root_path
      response.status.should == 200
    end
  end
 
  describe "GET /todos" do
    it "should be successful" do
      get todos_path
      response.status.should == 200
    end
  end
end
