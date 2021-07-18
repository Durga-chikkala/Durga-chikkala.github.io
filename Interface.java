public class Interface {
    public static void main(String [] args)
    {
       Inter obj=new  Inter();
       obj.show();
       obj.display();
    }
}
interface  Abc
{
    void show();
}
class Inter implements Abc{
    public void show()
    {
        System.out.println("Im Show");
    }
    public void display()
    {
        System.out.println("Display");
    }
}
