module "vpc" {
    source = "github.com/manuDevops726/terraform--practice/day-8-vpc-source-module"
    vpc_name = "custom-vpc"
    vpc_cidr_block = "10.0.0.0/16"
    public_subnets = ["10.0.0.0/24","10.0.1.0/24"]
    private_subnets = [ "10.0.2.0/24","10.0.3.0/24" ]
    availability_zones = [ "ap-south-1a","ap-south-1b" ]
    
    
  
}
