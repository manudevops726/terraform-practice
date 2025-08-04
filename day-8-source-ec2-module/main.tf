module "ec2" {
    source = "github.com/manu726Devops/terraform--practice/day-8-ec2-source-module"
    ami = "ami-0f1dcc636b69a6438"
    instance_type = "t2.micro"
    
}
