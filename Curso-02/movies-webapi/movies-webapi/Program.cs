var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// Configurar Swagger
builder.Services.AddEndpointsApiExplorer(); // Este servicio expone los endpoints de tu API
builder.Services.AddSwaggerGen(); // Agrega el generador de Swagger para documentar la API

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // Usar Swagger solo en desarrollo
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();