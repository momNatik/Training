using Microsoft.AspNetCore.SignalR.Client;

namespace SignalRClientApp
{
    public class Program
    {
        static async Task Main(string[] args)
        {
            Console.WriteLine("SignalR Client App started");
            var client = await CreateClient();

            while (true)
            {
                var command = Console.ReadLine();

                await client.SendAsync("Send", "ConsoleApp", command);

                if (command == "exit")
                {
                    return;
                }
            }
        }

        private static async Task<HubConnection> CreateClient()
        {
            var connection = new HubConnectionBuilder()
                .WithUrl("http://localhost:5015/chat")
                .Build();

            connection.On<string, string>("Receive", (user, message) =>
            {
                var newMessage = $"{user}: {message}";
                Console.WriteLine(newMessage);
            });

            try
            {
                await connection.StartAsync();
                Console.WriteLine("Connected to hub.");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Can't connect to hub.");
                Console.WriteLine(ex.ToString());
            }

            return connection;
        }
    }
}
